import ContactModel from '../models/crmModel';
import { Request, Response } from 'express';
import { Document, DocumentQuery } from 'mongoose';

export class ContactController {
  public addNewContact(req: Request, res: Response): Promise<Document> {
    let newContact = new ContactModel(req.body);

    return newContact
    .save((error: string, contact: Document): Response => {
        if (error) {
          return res.send(error);
        }
        return res.json(contact);
    });
  }

  public getContacts(req: Request, res: Response): DocumentQuery<Document[], Document, {}> {
    return ContactModel
    .find({}, (error: string | any, contacts: Array<Document>): Response => {
        if (error) {
          return res.send(error);
        }
        return res.json(contacts);
    });
  }

  public getContactWithID(req: Request, res: Response):
  DocumentQuery<Document | null, Document, {}> {
    return ContactModel
    .findById(req.params.contactId,
      (error: string | any, contact: Document | null) => {
        if (error) {
          return res.send(error);
        }
        return res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response): DocumentQuery<Document | null, Document, {}> {
    return ContactModel.findOneAndUpdate({ _id: req.params.contactId }, req.body,
      { new: true },
      (error: string | any, contact: Document | null): Response => {
      if (error) {
        return res.send(error);
      }
      return res.json(contact);
    });
  }

  public deleteContact(req: Request, res: Response) {
    return ContactModel
    .deleteOne({ _id: req.params.contactId }, (error: string | any) => {
      if (error) {
        return res.send(error);
      }
      return res.json({ message: 'Successfully deleted contact'});
    });
  }
}