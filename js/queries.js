var 
visitsave = obj => {
    sql = 'insert into visitentries '
    sql+= '(client,address,pic,position,phone,aim,transport ) '
    sql+= 'values '
    sql+= '("'+obj.client+'","'+obj.address+'","'+obj.pic+'","'+obj.position+'","'+obj.phone+'","'+obj.aim+'","'+obj.transport+'") '
    console.log("Save query",sql)
    return sql
},
visitgets = () => {
    sql = 'select * from visitentries '
    console.log("gets query",sql)
    return sql
},
visitget = obj => {
    sql = 'select * from visitentries '
    sql+= 'where id = ' + obj.id
    console.log("get query",sql)
    return sql
},
visitupdate = obj => {
    sql = 'update visitentries '
    sql+= 'set client="'+obj.client+'",'
    sql+= 'address="'+obj.address+'",'
    sql+= 'pic="'+obj.pic+'",'
    sql+= 'position="'+obj.position+'",'
    sql+= 'phone="'+obj.phone+'",'
    sql+= 'aim="'+obj.aim+'", '
    sql+= 'transport="'+obj.transport+'" '
    sql+= 'where id = ' + obj.id
    console.log("Update query",sql)
    return sql
},
visitremove = obj => {
    sql = 'delete from visitentries '
    sql+= 'where id = ' + obj.id + ' '
    console.log('Remove query',sql)
    return sql
},
offersave = obj => {
    sql = 'insert into visitentries '
    sql+= '(client,address,pic,position,phone,aim,transport ) '
    sql+= 'values '
    sql+= '("'+obj.client+'","'+obj.address+'","'+obj.pic+'","'+obj.position+'","'+obj.phone+'","'+obj.aim+'","'+obj.transport+'") '
    console.log("Save query",sql)
    return sql
},
offergets = () => {
    sql = 'select * from visitentries '
    console.log("gets query",sql)
    return sql
},
offerget = obj => {
    sql = 'select * from visitentries '
    sql+= 'where id = ' + obj.id
    console.log("get query",sql)
    return sql
},
offerupdate = obj => {
    sql = 'update visitentries '
    sql+= 'set client="'+obj.client+'",'
    sql+= 'address="'+obj.address+'",'
    sql+= 'pic="'+obj.pic+'",'
    sql+= 'position="'+obj.position+'",'
    sql+= 'phone="'+obj.phone+'",'
    sql+= 'aim="'+obj.aim+'", '
    sql+= 'transport="'+obj.transport+'" '
    sql+= 'where id = ' + obj.id
    console.log("Update query",sql)
    return sql
},
offerremove = obj => {
    sql = 'delete from visitentries '
    sql+= 'where id = ' + obj.id + ' '
    console.log('Remove query',sql)
    return sql
}

module.exports = {
    visitgets : visitgets,
    visitget : visitget,
    visitsave : visitsave,
    visitupdate : visitupdate,
    visitremove : visitremove,
    offergets : offergets,
    offerget : offerget,
    offersave : offersave,
    offerupdate : offerupdate,
    offerremove : offerremove
}