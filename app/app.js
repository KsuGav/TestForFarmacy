/**
 * Created by ss on 19.08.2016.
 */
angular.module('webPage',[])
.controller('usersCtrl',function() {
    var self = this;
    self.users = [
        {
            name:"User1",
            cityBirth:"Lviv",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        },
        {
            name:"User2",
            cityBirth:"Kharkiv",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        },
        {
            name:"User3",
            cityBirth:"Kiev",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        },
        {
            name:"User4",
            cityBirth:"Lviv",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        },
        {
            name:"User5",
            cityBirth:"Poltava",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        },{
            name:"User6",
            cityBirth:"Odessa",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        },
        {
            name:"User7",
            cityBirth:"Lviv",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        },
        {
            name:"User8",
            cityBirth:"Kharkiv",
            photo: "src/img/UserBig.png",
            info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquid atque, aut consequatur consequuntur dolor dolorum explicabo " +
            "fuga fugit minus nisi nostrum, porro quas quisquam reiciendis rerum soluta veniam veritatis voluptatum?"
        }];
    self.contacts=[{
        department:'Department1',
        telephone:'+38(000)999-99-99',
        skype:'brand.department1'
    },
        {
            department:'Department2',
            telephone:'+38(999)000-00-00',
            skype:'brand.department2'
        }]

})
    //.controller('formCtrl',function(){
    //    var self = this;
    //    self.formData = {
    //        name:self.name,
    //        surname:self.surname,
    //        text:self.text
    //    };
    //    self.processForm = function() {
    //        $http({
    //            method  : 'POST',
    //            url     : 'process.php',
    //            data    : $.param(self.formData),  // pass in data as strings
    //            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    //        })
    //            .success(function(data) {
    //                console.log(data);
    //
    //                if (!data.success) {
    //                    // if not successful, bind errors to error variables
    //                    self.errorName = data.errors.name;
    //                    self.errorSuperhero = data.errors.surname;
    //                    console.log('error');
    //                } else {
    //                    // if successful, bind success message to message
    //                    self.message = data.message;
    //                    console.log('error2');
    //                }
    //            });
    //
    //};
    //});
