import { ContactController } from './../controllers/crmController';
import { Application, Request, Response } from 'express';

export class Routes {
  private contactController: ContactController = new ContactController();

  public routes(app: Application): void {
    app.route('/')
    .get((req: Request, resp: Response) => {
      resp.status(200).send({
        message: 'GET request was successful!!!'
      });
    });

    // Contact
    app.route('/contact')
    // GET endpoint
    .get(this.contactController.getContacts)
    // POST endpoint
    .post(this.contactController.addNewContact);

    // Contact detail
    app.route('/contact/:contactId')
    // get specific contact
    .get(this.contactController.getContactWithID)
    .put(this.contactController.updateContact)
    .delete(this.contactController.deleteContact);
  }
}