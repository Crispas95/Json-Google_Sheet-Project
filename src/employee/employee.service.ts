
import { Injectable} from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';




@Injectable()
export class EmployeeService {
    
   async postAll(payload): Promise<void>{

    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

    
    const writeToSheet= async ()=>{

   async function sheetsAutomate(){
    const auth = new GoogleAuth({
        keyFile: 'credentials.json',
        scopes: SCOPES
    });
   const client = await auth.getClient();

   const sheets = google.sheets({version:'v4',auth: client});

   const rowsToBeAdded = {
    "majorDimension": "ROWS",
    values: [[payload.contact.name,payload.contact.urn,payload.contact.uuid,payload.flow.name,payload.flow.uuid,
    payload.flow.name,payload.flow.uuid,
    payload.results.category.category,payload.results.category.value,
    payload.results.children0_11hasreceivedopv.category,payload.results.children0_11hasreceivedopv.value,
    payload.results.children0_11neverreceivedopv.category,payload.results.children0_11neverreceivedopv.value,
    payload.results.children_12_59hasreceivedopv.category,payload.results.children_12_59hasreceivedopv.value,
    payload.results.children_12_59neverreceivedopv.category,payload.results.children_12_59neverreceivedopv.value,
    payload.results.day.category,payload.results.day.value,
    payload.results.household.category,payload.results.household.value,
    payload.results.result_15.category,payload.results.result_15.value,
    payload.results.result_17.category,payload.results.result_17.value,
    payload.results.result_18.category,payload.results.result_18.value,
    payload.results.totalmissing.category,payload.results.totalmissing.value,
    payload.results.totalreturnedunopened_unusable.category,payload.results.totalreturnedunopened_unusable.value,
    payload.results.totalreturnedunopened_usable.category,payload.results.totalreturnedunopened_usable.value,
    payload.results.totalsuspectedafpcases.category,payload.results.totalsuspectedafpcases.value,
    payload.results.totalvialsreturnedopened.category,payload.results.totalvialsreturnedopened.value,
    payload.results.totalvialswerereceived.category,payload.results.totalvialswerereceived.value]]
  }
   try{
     await sheets.spreadsheets.values.append({
        //@ts-ignore
         resource: rowsToBeAdded,
         auth,
         spreadsheetId: process.env.Id,
         range:'Sheet1!A:R',
         valueInputOption:'USER_ENTERED',

     });
   }catch(err){
    console.log(err);
   }

}
sheetsAutomate();
}

writeToSheet();
     return
 } 
}


