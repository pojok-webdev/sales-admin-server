var 
save = obj => {
    sql = 'insert into visitentries '
    sql+= '(client,address,pic,position,phone,aim ) '
    sql+= 'values '
    sql+= '("'+obj.client+'","'+obj.address+'","'+obj.pic+'","'+obj.position+'","'+obj.phone+'","'+obj.aim+'") '
    console.log("Save query",sql)
    return sql
},
get = () => {
    sql = 'select * from visitentries '
    console.log("get query",sql)
    return sql
}
module.exports = {
    get : get,
    save : save
}