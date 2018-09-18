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
    sql = 'insert into offers '
    sql+= '(kdoffer,offerdate,client_id,client_site_id,clientname,address,email,pic,phone,service,price,description,sale_id ) '
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.kdoffer+'",'
    sql+= '"'+obj.offerdate+'",'
    sql+= '"'+obj.client_id+'",'
    sql+= '"'+obj.client_site_id+'",'
    sql+= '"'+obj.clientname+'",'
    sql+= '"'+obj.address+'",'
    sql+= '"'+obj.email+'",'
    sql+= '"'+obj.pic+'",'
    sql+= '"'+obj.phone+'",'
    sql+= '"'+obj.service+'",'
    sql+= '"'+obj.price+'",'
    sql+= '"'+obj.description+'",'
    sql+= '"'+obj.sale_id+'"'
    sql+= ') '
    console.log("Save Offer query",sql)
    return sql
},
offergets = () => {
    sql = 'select * from offers '
    console.log("gets Offer query",sql)
    return sql
},
offerget = obj => {
    sql = 'select * from offers '
    sql+= 'where id = ' + obj.id
    console.log("get Offer query",sql)
    return sql
},
offerupdate = obj => {
    sql = 'update offers '
    sql+= 'set kdoffer="'+obj.kdoffer+'",'
    sql+= 'client_id="'+obj.client_id+'",'
    sql+= 'client_site_id="'+obj.client_site_id+'",'
    sql+= 'clientname="'+obj.clientname+'",'
    sql+= 'address="'+obj.address+'",'
    sql+= 'email="'+obj.email+'", '
    sql+= 'pic="'+obj.pic+'", '
    sql+= 'phone="'+obj.phone+'", '
    sql+= 'service="'+obj.service+'", '
    sql+= 'price="'+obj.price+'", '
    sql+= 'description="'+obj.description+'", '
    sql+= 'sale_id="'+obj.sale_id+'" '
    sql+= 'where id = ' + obj.id
    console.log("Update Offer query",sql)
    return sql
},
offerremove = obj => {
    sql = 'delete from offers '
    sql+= 'where id = ' + obj.id + ' '
    console.log('Remove Offer query',sql)
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