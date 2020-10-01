const roles = require('../../roles');

module.exports = (reactionsList, guildMember, rolesList) => {
  const guildMemberRoles = guildMember.roles._roles;

  reactionsList.forEach((reaction) => {
    const role = roles.filter((r) => r.emoji === reaction)[0];
    const guildRole = rolesList[0].cache.find((r) => r.name.toLowerCase() === role.roleName);
    if (guildMemberRoles.find((r) => r.name === guildRole.name) && reaction !== '✅') {
      guildMember.roles.remove(guildRole.id);
    } else {
      guildMember.roles.add(guildRole.id);
    }
  });
};
