declare module 'amadeus' {
     export default class Amadeus {
       constructor(options: { clientId: string; clientSecret: string });
   
       referenceData: {
         locations: {
           hotels: {
             get: (options: {
               cityCode: string;
               checkInDate?: string;
               checkOutDate?: string;
             }) => Promise<{ data: any }>;
           };
         };
       };
     }
   }
   