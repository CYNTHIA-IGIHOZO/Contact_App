
const contactModel = require('../model/contact.model.js')

const contactController={
  createcontact: async(req,res)=>{
    try {
      const newcontact= await contactModel.create(req.body)
      res.status(201).json({msg:'contactadded',contact:newcontact})
        } catch (error) {
         console.log(error);
    }
  },


getAllcontacts : async (req, res) => {
  try {
    const allcontacts = await contactModel.find({});
    res.status(200).json({ contacts: allcontacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
},

getcontactbyid: async(req,res)=>{
  try {
    const contactbyid= await contactModel.findById(req.params.id);
    if (!contactbyid) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(201).json({contact:contactbyid})
      } catch (error) {
       console.log(error);
  }
},
getcontactbyfirstname: async(req,res)=>{
  try {
    const contactbyfirstname= await contactModel.findOne({firstName:req.params.firstName})
    res.status(201).json({constact:contactbyfirstname})
      } catch (error) {
       console.log(error);
  }
},
getcontactbysecondname : async (req, res) => {
  try {
    const contactbysecondname = await contactModel.findOne({ lastName: req.params.lastName });
    if (!contactbysecondname) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ contact: contactbysecondname });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
},
 getcontactbyphone : async (req, res) => {
  try {
    const contactbyphone = await contactModel.findOne({ phone: req.params.phone });
    if (!contactbyphone) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ contact: contactbyphone });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
},
updatecontact: async(req,res)=>{
  try {
    const contactupdate= await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(201).json({mssg:'contact upadated',constact:contactupdate})
      } catch (error) {
       console.log(error);
  }
},
deletecontact: async(req,res)=>{
  try {
    const contactdelete= await contactModel.findByIdAndDelete(req.params.id,req.body)
    res.status(201).json({mssg:'contact deleted',constact:contactdelete})
      } catch (error) {
       console.log(error);
  }
}


}
module.exports=contactController