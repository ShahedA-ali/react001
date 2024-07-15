const orderOfRoles = {
    'SAD': ['SAD_GENERAL_SEGMENT', 'SAD_ITEM', 'SAD_TAX'],
    'TRANSIT': ['DEC_REF_YER', 'UNTAXTAB'],
    'USER': ['USER_VIEW', 'USER_CREATE', 'USER_UPDATE', 'USER_DELETE'],
}

let rolesForUser = {
    'SAD': [],
    'TRANSIT': [],
    'USER': []
}

const roles = (rolesArray) => {
    console.log(rolesArray)
    rolesArray.forEach(role => {
        if (role === 'ADMIN') {
            rolesForUser = orderOfRoles
        }
        else if (role.startsWith('USER')) {
            rolesForUser['USER'].push(orderOfRoles.USER.pop(role))
        }
        else if (role.startsWith('SAD')) {
            rolesForUser['SAD'].push(orderOfRoles.SAD.pop(role))
            // console.log(a)
        }
    })

    for (const catagory in rolesForUser) {
        if (!rolesForUser[catagory].length) {
            delete rolesForUser[`${catagory}`]
        }
    }

    return [rolesForUser]
}

export default roles