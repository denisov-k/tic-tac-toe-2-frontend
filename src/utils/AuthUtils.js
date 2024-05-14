export default {
    hasGroupsAll(userGroups, groups) {
        let intersect = userGroups.filter((elem) => groups.includes(elem));
        return intersect.length == groups.length;
    },
    hasGroupsAny(userGroups, groups) {
        let intersect = userGroups.filter((elem) => groups.includes(elem));
        return intersect.length > 0;
    }
}