import BoxForContact from "../components/contact/contactBoxes";
import ContactForm from "../components/contact/contactForm";
import ContactHero from "../components/contact/contactHero";
import MapOfLocation from "../components/contact/map";

function Contact() {
  return (
    <div className="space-y-10">
      <ContactHero></ContactHero>
      <BoxForContact></BoxForContact>
      <div className="p-4 xl:p-0">
        <MapOfLocation></MapOfLocation>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Contact;
