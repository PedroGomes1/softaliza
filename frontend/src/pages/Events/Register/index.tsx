import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState, ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import { registerNewCategory } from "../../../validations";

import { Container, WrapperInputFile, WrapperImage, Image } from "./styles";
import api from "../../../services/api";

interface RegisterEventProps {
  title: string;
  description: string;
  date: string;
  hour: string;
  email: string;
  telephone: string;
  address: string;
  category_id: string;
}

interface SelectProps {
  id: number;
  description: string;
}

const RegisterCategory: React.FC = () => {
  const history = useHistory();

  const [previewImage, setPreviewImage] = useState("");
  const [image, setImage] = useState<File>({} as File);
  const [categoryEvents, setCategoryEvents] = useState<[]>([]);

  const { register, handleSubmit, errors } = useForm<RegisterEventProps>({
    resolver: yupResolver(registerNewCategory),
  });

  useEffect(() => {
    async function loadCategoryEvents() {
      const response = await api.get("event-category");

      setCategoryEvents(response.data);
    }
    loadCategoryEvents();
  }, []);

  const handleRegisterEvent = useCallback(
    async (dataForm: RegisterEventProps) => {
      const data = new FormData();

      data.append("title", dataForm.title);
      data.append("description", dataForm.description);
      data.append("date", dataForm.date);
      data.append("hour", dataForm.hour);
      data.append("email", dataForm.email);
      data.append("telephone", dataForm.telephone);
      data.append("address", dataForm.address);
      data.append("category_id", dataForm.category_id);
      data.append("image", image);

      try {
        await api.post("event", data);

        history.push("/mainpage");
        toast.success("Evento cadastrado com sucesso");
      } catch (error) {
        toast.error("Erro ao cadastrar evento");
      }
    },
    [history, image]
  );

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    const imagePreview = URL.createObjectURL(selectedImage);

    setPreviewImage(imagePreview);
  }

  return (
    <Container>
      <Header />
      <Form
        title="Registrar novo evento"
        handleSubmitForm={handleSubmit(handleRegisterEvent)}
        buttonSubmitText="Cadastrar"
        routeBack="/mainpage"
      >
        <Input
          name="title"
          type="text"
          label="Titulo do do evento"
          error={errors.title?.message}
          required
          register={register}
        />

        <label htmlFor="">Descrição</label>
        <textarea name="description" ref={register({ required: true })} />

        <Input
          name="date"
          type="date"
          label="Data do evento"
          error={errors.date?.message}
          required
          register={register}
        />

        <label htmlFor="">Categoria</label>
        <select name="category_id" ref={register}>
          {categoryEvents.map(({ id, description }: SelectProps) => (
            <option key={id} value={id}>
              {description}
            </option>
          ))}
        </select>

        <Input
          name="hour"
          type="time"
          label="Hora do evento"
          error={errors.hour?.message}
          required
          register={register}
        />

        <Input
          name="email"
          type="email"
          label="E-mail para contato"
          error={errors.email?.message}
          required
          register={register}
        />

        <Input
          name="telephone"
          type="tel"
          label="Telefone para contato"
          error={errors.telephone?.message}
          required
          register={register}
        />

        <Input
          name="address"
          type="text"
          label="Endereço do evento (URL ou físico)"
          error={errors.address?.message}
          required
          register={register}
        />

        <label htmlFor="">Imagem do evento</label>
        {previewImage ? (
          <WrapperImage>
            <Image src={previewImage} />
            <MdClose
              size={25}
              color="#f64c75"
              onClick={() => setPreviewImage("")}
            />
          </WrapperImage>
        ) : (
          <WrapperInputFile>
            <label htmlFor="image[]">
              <FiPlus size={24} color="#15b6d6" />
            </label>
          </WrapperInputFile>
        )}

        <input
          multiple
          type="file"
          id="image[]"
          onChange={handleSelectImages}
        />
      </Form>
    </Container>
  );
};

export default RegisterCategory;
