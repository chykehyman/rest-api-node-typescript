import { contact as ContactModel } from "models/crmModel";
import { Request, Response } from 'express';

export class ContactController {
  public addNewContact (req: Request, res: Response): Response {                
    let newContact = new ContactModel(req.body);

    return newContact.save((error: string, contact: any) => {
        if(error){
          return res.send(error);
        }    
        return res.json(contact);
    });
  }

  public getContacts (req: Request, res: Response): Response {           
    return ContactModel.find({}, (error: string, contacts: Array<any>) => {
        if(error){
          return res.send(error);
        }
        return res.json(contacts);
    });
  }

  public getContactWithID (req: Request, res: Response): Response {           
    return ContactModel.findById(req.params.contactId, (error: string, contact: any) => {
        if(error){
          return res.send(error);
        }
        return res.json(contact);
    });
  }

  public updateContact (req: Request, res: Response): Response {           
    return ContactModel.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (error: string, contact: any) => {
      if(error){
        return res.send(error);
      }
      return res.json(contact);
    });
  }

  public deleteContact (req: Request, res: Response): Response {           
    return ContactModel.remove({ _id: req.params.contactId }, (error: string, contact: any) => {
      if(error){
        return res.send(error);
      }
      return res.json({ message: `Successfully deleted contact with name: ${contact.data.firstName}`});
    });
  }
}