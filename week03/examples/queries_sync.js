'use strict';

const sqlite = require('sqlite3');


function queries(max_count) {
    let count = 0 ;
    let step = false ;

    const db = new sqlite.Database('data.sqlite',
        (err) => { if (err) throw err; });


    let methods = {
        insert: () => {
            count++; 
            db.run('insert into numbers(number) values(1)', (err) => {
                if (err) throw err; 
                else methods.next();
            });
        },
        print:() => {
            db.all('select count(*) as tot from numbers',
            (err, rows) => {
                if(err) throw err;
                console.log(rows[0].tot);
                methods.next();
            }) ;            
        },
        next: () => {
            if(count > max_count) {
                db.close();
                return;
            }   
            if (!step) {
                step = true ;
                methods.insert();
            } else {
                step = false ;
                methods.print();
            }
        }
    }
    return methods;
}

const runner = queries(100) ;
runner.next();


