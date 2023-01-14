const PersonalData = {
    get: (req, res) => {
        res.status(200).send('Getting one record.');
    },
    list: (req, res) => {
        res.status(200).send('Service is available.');
    },
    create: (req, res) => {
        res.status(201).send('Creating request.');
    },
    update: (req, res) => {
        res.status(202).send('Updating request.');
    },
    destroy: (req, res) => {
        res.status(204).send('Deleting request.');
    }
}

//module.exports = PersonalData;
export default PersonalData;
