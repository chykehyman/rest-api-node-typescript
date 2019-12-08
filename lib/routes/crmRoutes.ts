import { Application, Request, Response } from 'express';

export class Routes {
  public routes(app: Application): void {
    app.route('/')
    .get((req: Request, resp: Response) => {
      resp.status(200).send({
        message: 'GET request was successful!!!'
      })
    })

    // Contact 
    app.route('/contact') 
    // GET endpoint 
    .get((req: Request, res: Response) => {
    // Get all contacts            
        res.status(200).send({
            message: 'GET request was successful!!!'
        })
    })        
    // POST endpoint
    .post((req: Request, res: Response) => {   
    // Create new contact         
        res.status(201).send({
            message: 'POST request was successful!!!'
        })
    })

    // Contact detail
    app.route('/contact/:contactId')
    // get specific contact
    .get((req: Request, res: Response) => {
    // Get a single contact detail            
        res.status(200).send({
            message: 'GET request was successful!!!'
        })
    })
    .put((req: Request, res: Response) => {
    // Update a contact           
        res.status(200).send({
            message: 'PUT request was successful!!!'
        })
    })
    .delete((req: Request, res: Response) => {       
    // Delete a contact     
        res.status(200).send({
            message: 'DELETE request was successful!!!'
        })
    })
  }
}