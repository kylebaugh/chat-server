let messages = []

let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({
            id, 
            text, 
            time
        })
        id++
        res.status(200).send(messages)

    },

    read: (req, res) => {
        res.status(200).send(messages)

    },

    update: (req, res) => {
        const {id} = req.params
        const {text, time} = req.body
        const index = messages.findIndex((e) => e.id === +id)
        messages.splice(index,1, {
            id: +id,
            text: text || messages[indes].text,
            time: time || messages[index].time
        })
        res.status(200).send(messages)

    },

    delete: (req, res) => {
        const {id} = req.params
        messages = messages.filter((e) => e.id !== +id)
        res.status(200).send(messages)

    }
}