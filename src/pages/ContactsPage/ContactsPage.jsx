import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import {
  selectLoading,
  selectError,
} from "../../redux/contacts/contactsSelect";

export default function TasksPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your Contacts</PageTitle>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader>Loading contacts, please wait</Loader>}
      {error && <Error>Error message</Error>}
      <ContactList />
    </>
  );
}
