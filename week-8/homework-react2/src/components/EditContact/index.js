import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone && contact.id !== currentContact.id
        ? contact
        : null
    );

    if (!email || !name || !phone) {
      return toast.warning("Пожалуйста заполните все поля!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("Данные уже существуют!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("Данные уже существуют!!");
    }

    const data = {
      id: currentContact.id,
      email,
      name,
      phone,
    };

    updateContact(data);
    toast.success("Контакт успешно обновлён!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Имя"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Фамилия"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Номер телефона"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Обновить контакт
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  Отмена
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">Контакты не найдены</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
