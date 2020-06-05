// export default function(req, res) {
//     return (err, data) => {
//         if (err) {
//             res.status(500).json(err)
//         } else if (data) {
//             res.status(200).json(data)
//         } else {
//             res.status(200).send()
//         }
//     }
// }

// export default function(req, res) {
//     return (err, data) => {
//         if (err) {
//             res.status(500).json(err)
//         } else if (data) {
//             res.status(200).json(data)
//         } else {
//             res.status(200).send()
//         }
//     }
// }
export default function (req, res) {
    return (err, data) => {
        if (err) {
            if (err == 403) {
                res.status(403).json(data)
            } else if (err == 304) {
                res.status(304).json(data)
            } else if (err == 401) {
                res.status(401).json(data)
            } else if (err == 404) {
                res.status(404).json(data)
            } else if (err == 412) {
                res.status(412).json(data)
            } else if (err == 409) {
                res.status(409).json(data)
            } else if (_.isEmpty(data)) {
                res.status(204).json(data)
            } else {
                res.status(500).json(err)
            }
        } else if (data) {
            if (_.isEmpty(data)) {
                res.status(204).json(data)
            } else {
                res.status(200).json(data)
            }
        } else {
            res.status(200).send()
        }
    }
}
