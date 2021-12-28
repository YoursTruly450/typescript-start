enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard;
const membershipreverse = Membership[2];
console.log(membership);
console.log(membershipreverse);

enum SocialMedia {
  VKONTAKTE = 'VK',
  FACEBOOK = 'FB',
  INSTAGRAM = 'INST'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);
