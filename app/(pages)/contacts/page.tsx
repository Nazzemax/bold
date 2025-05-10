import { Map } from "@/features/contacts/components/Map/Map";
import { FormContactUs } from "@/widgets/Forms/FormContactUs";
import React from "react";

type Props = {};

const ContactsPage: React.FC<Props> = ({}) => {
  return (
    <div>
      {/* Пойдет */}
      <FormContactUs />

      {/* Требует правки */}
      <Map />
    </div>
  );
};

export default ContactsPage;
