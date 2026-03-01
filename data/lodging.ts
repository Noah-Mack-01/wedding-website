export interface Hotel {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  hasGroupRate: boolean;
  groupRateInfo?: string;
  bookingDeadline?: string;
}

export interface BulkLodging {
  title: string;
  description: string;
  googleFormUrl: string;
}

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'The Charleston Grand Hotel',
    address: '456 Harbor View Dr, Charleston, SC 29401',
    phone: '(843) 555-0100',
    website: 'https://example.com/charleston-grand',
    hasGroupRate: true,
    groupRateInfo: 'Use code SMITHWEDDING for 15% off',
    bookingDeadline: 'August 15, 2025',
  },
  {
    id: '2',
    name: 'Historic Inn & Suites',
    address: '789 Meeting St, Charleston, SC 29403',
    phone: '(843) 555-0200',
    website: 'https://example.com/historic-inn',
    hasGroupRate: true,
    groupRateInfo: 'Block rate of $159/night available',
    bookingDeadline: 'August 1, 2025',
  },
  {
    id: '3',
    name: 'Waterfront Marriott',
    address: '101 Ocean Blvd, Charleston, SC 29401',
    phone: '(843) 555-0300',
    website: 'https://example.com/waterfront-marriott',
    hasGroupRate: false,
  },
  {
    id: '4',
    name: 'Budget Inn Express',
    address: '222 King St, Charleston, SC 29405',
    phone: '(843) 555-0400',
    hasGroupRate: false,
  },
];

export const bulkLodging: BulkLodging = {
  title: 'Group Accommodation Sign-Up',
  description:
    'Interested in sharing accommodations with other guests? Sign up below and we will help coordinate group bookings.',
  googleFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',
};
