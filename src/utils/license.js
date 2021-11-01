const userHasLicense = (licenseType) => {
  var user = JSON.parse(localStorage.getItem('user'));

  if (!user) return false;

  return user.licenses?.includes(licenseType);
};

export { userHasLicense };
