import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ContactForm from "../ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader>Loading contacts, please wait</Loader>}
      {error && <Error>Error message</Error>}
      <ContactList />
    </div>
  );
}
