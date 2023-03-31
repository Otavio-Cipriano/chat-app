
function formatErrorRes(error) {
    const message = error[0].context.label + error[0].message.replace(/\"username\"/, "")
    return message
}

module.exports = { formatErrorRes }