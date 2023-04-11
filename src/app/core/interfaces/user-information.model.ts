export interface UserInformation {
  id: number;
  email: string;
  name: string
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string
    geo: {
      lat: string;
      lng: string
    }
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string
  }

}
