import { Contact } from "../models/ContactModel.js";

export function contact(req, res) {
  res.render("contact", { contact: {} });
  return;
}

export const registerContact = async (req, res) => {
  const redirectBack = () => res.redirect(req.get("Referer") || "/contact");

  try {
    const contact = new Contact(req.body);
    await contact.register();

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(redirectBack);
      return;
    }

    req.flash("success", "Contato criado com sucesso.");
    req.session.save(() => res.redirect(`/contact/${contact.contact._id}`));
    return;
  } catch (error) {
    console.log(error);
    return res.render("errors/404");
  }
};

export const editContact = async (req, res) => {
  if (!req.params.id) return res.render("errors/404");
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.render("errors/404");

  res.render("contact", { contact });
};

export const updateContact = async (req, res) => {
  const redirectBackContact = () => {
    if (req.params.id) return res.redirect(`/contact/${req.params.id}`);
    return res.redirect(`/contact`);
  };
  try {
    if (!req.params.id) return res.render("errors/404");
    const contact = new Contact(req.body);
    await contact.editAndUpdate(req.params.id);

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(redirectBackContact);
      return;
    }

    req.flash("success", "Contato editado com sucesso.");
    req.session.save(() => res.redirect(`/contact/${contact.contact._id}`));
    return;
  } catch (error) {
    console.log(error);
    return res.render("errors/404");
  }
};

export const deleteContact = async (req, res) => {
  if (!req.params.id) return res.render("errors/404");

  const contact = await Contact.delete(req.params.id);
  if (!contact) return res.render("errors/404");

  req.flash("success", "Contato apagado com sucesso.");
  req.session.save(() => res.redirect('/'));
  return;
}
