import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import { eventCategorySchema } from "../../../validations";

import { Container } from "./styles";

export interface EventCategoryProps {
  description: string;
}

interface FormEventCategoryProps {
  eventData?: EventCategoryProps;
  handleSubmitFormEventCategory(event: EventCategoryProps): void;
  titleForm: string;
  titleButton: string;
}

const FormEventCategory: React.FC<FormEventCategoryProps> = ({
  eventData,
  handleSubmitFormEventCategory,
  titleForm,
  titleButton,
}) => {
  const { register, handleSubmit, errors } = useForm<EventCategoryProps>({
    resolver: yupResolver(eventCategorySchema),
  });

  return (
    <Container>
      <Form
        title={titleForm}
        handleSubmitForm={handleSubmit(handleSubmitFormEventCategory)}
        buttonSubmitText={titleButton}
        routeBack="/event-category"
      >
        <Input
          name="description"
          type="text"
          label="Descrição da categoria"
          error={errors.description?.message}
          required
          register={register}
          autoFocus
          defaultValue={eventData?.description}
        />
      </Form>
    </Container>
  );
};

export default FormEventCategory;
