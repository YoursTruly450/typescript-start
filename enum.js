var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipreverse = Membership[2];
console.log(membership);
console.log(membershipreverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VKONTAKTE"] = "VK";
    SocialMedia["FACEBOOK"] = "FB";
    SocialMedia["INSTAGRAM"] = "INST";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
