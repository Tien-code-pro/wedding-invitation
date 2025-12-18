export type AnnouncementSide = {
  couple: {
    groom: string;
    bride: string;
  };
  inviteText: string;
  inviteTarget: string;
  locationTitle: string;
  address: string;
  time: string;
  date: {
    day: string;
    month: string;
    year: string;
    lunar: string;
  };
  footerNote: string;
};