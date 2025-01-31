import React, { useState } from 'react';
import style from '../Contacts.module.scss';
import Button from '../button/button';


interface FormProps {
  onSubmit: (name: string, phone: string, email: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isAgree, setIsAgree] = useState(false);

  const isFormValid = name && phone && email && isAgree;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => setIsAgree(e.target.checked);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, phone, email); // Отправляем данные
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.formGroup}>
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          placeholder="Иван Иванов Иванович"
          className={style.input}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="phone">Номер телефона</label>
        <input
          type="text"
          id="phone"
          placeholder="+996"
          className={style.input}
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className={style.formGroup}>
        <label htmlFor="email">Электронная почта</label>
        <input
          type="email"
          id="email"
          placeholder="Введите электронную почту"
          className={style.input}
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={style.checkboxGroup}>
        <label className={style.checkbox}>
          <input
            type="checkbox"
            checked={isAgree}
            onChange={handleCheckboxChange}
          />
          <span>
            Я согласен на обработку моих данных в соответствии с{' '}
            <a href="#" className={style.privacyLink}>
              политикой конфиденциальности
            </a>
          </span>
        </label>
        <Button disabled={!isFormValid} isValid={isFormValid} />
      </div>
    </form>
  );
};

export default Form;
