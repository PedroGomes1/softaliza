import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import api from "../../../services/api";
import { eventSchema } from "../../../validations";
import { Container, WrapperInputFile, WrapperImage, Image } from "./styles";

export interface EventFormData {
  id: number;
  title: string;
  description: string;
  date: string;
  hour: string;
  email: string;
  telephone: string;
  image_url: string;
  address: string;
  category_id: number;
}

interface FormEventProps {
  eventData?: EventFormData;
  handleSubmitFormEvent(event: EventFormData): void;
  titleForm: string;
  titleButton: string;
}

interface SelectProps {
  id: number;
  description: string;
}

const FormEvent: React.FC<FormEventProps> = ({
  eventData,
  handleSubmitFormEvent,
  titleForm,
  titleButton,
}) => {
  const { register, errors, handleSubmit } = useForm<EventFormData>({
    resolver: yupResolver(eventSchema),
  });

  const [previewImage, setPreviewImage] = useState(eventData?.image_url);
  const [categoryEvents, setCategoryEvents] = useState<[]>([]);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImage = event.target.files[0];

    const imagePreview = URL.createObjectURL(selectedImage);

    setPreviewImage(imagePreview);
  }

  useEffect(() => {
    async function loadCategoryEvents() {
      const response = await api.get("event-category");

      setCategoryEvents(response.data);
    }
    loadCategoryEvents();
  }, []);

  return (
    <Container>
      <Form
        title={titleForm}
        handleSubmitForm={handleSubmit(handleSubmitFormEvent)}
        buttonSubmitText={titleButton}
        routeBack="/mainpage"
      >
        <Input
          name="title"
          type="text"
          label="Titulo do do evento"
          error={errors.title?.message}
          required
          register={register}
          defaultValue={eventData?.title}
          autoFocus
        />

        <label htmlFor="">Descrição</label>

        <textarea
          name="description"
          ref={register}
          defaultValue={eventData?.description}
        />
        <p>{errors.description?.message}</p>

        <Input
          name="date"
          type="date"
          label="Data do evento"
          error={errors.date?.message}
          required
          register={register}
          defaultValue={eventData?.date.substr(0, 10)}
        />

        <label htmlFor="">Categoria</label>
        <select
          name="category_id"
          ref={register}
          defaultValue={eventData?.category_id}
          required
        >
          {categoryEvents.map(({ id, description }: SelectProps) => (
            <option
              key={id}
              value={id}
              selected={id === eventData?.category_id}
            >
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
          defaultValue={eventData?.hour}
        />

        <Input
          name="email"
          type="email"
          label="E-mail para contato"
          error={errors.email?.message}
          required
          register={register}
          defaultValue={eventData?.email}
        />

        <Input
          name="telephone"
          type="tel"
          label="Telefone para contato"
          error={errors.telephone?.message}
          required
          register={register}
          defaultValue={eventData?.telephone}
        />

        <Input
          name="address"
          type="text"
          label="Endereço do evento (URL ou Físico)"
          error={errors.address?.message}
          required
          register={register}
          defaultValue={eventData?.address}
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
          name="image_url"
          type="file"
          id="image[]"
          onChange={handleSelectImage}
          ref={register}
        />
      </Form>
    </Container>
  );
};

export default FormEvent;
