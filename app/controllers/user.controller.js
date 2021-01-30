exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userProfile = (req, res) => {
    res.status(200).send("User Profile.");
};

exports.adminProfile = (req, res) => {
    res.status(200).send("Admin Profile.");
};

exports.superuserProfile = (req, res) => {
    res.status(200).send("Superuser Profile.");
};