const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("We are connected bro/sis...");
}
  const kittySchema = new mongoose.Schema({
 name: String
});
  kittySchema.methods.speak = function speak () {
      const greeting = "My name is " + this.name
      console.log(greeting);
      
    }
    
    const Kitten = mongoose.model('AkashKitty', kittySchema);

  const AkashKitty = new Kitten({name: 'AkashKitty' });
  AkashKitty.speak();

//   await AkashKitty.save();

//   const AkashKitty2 = new Kitten({name: 'AkashKitty2' });

//   const akashKitty = new Kitten({ name: 'Akash Engineer' });
// console.log(akashKitty.name);
// akashKitty.speak();
//  AkashKitty.save(function (err, AkashKitty ) {
//     if(err) return console.error(err);
//     AkashKitty.speak();
//  });
//  AkashKitty2.save(function (err, Ak ) {
//     if(err) return console.error(err);
//     Ak.speak();
//  });
