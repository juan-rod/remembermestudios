var nodemailer = require('nodemailer');

exports.handleSayHello = function(req,res){
	var text = 'Hello world from \n\n' + req.body.name;
	var mailOptions = {
	    from: 'juan.j.rodriguez2@gmail.com',
	    to: 'itdoesnmakesense@gmail.com', 
	    subject: 'Email Example', 
	    text: text 
	    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
	};
	var transporter = nodemailer.createTransport({
		service:'Gmail',
		auth:{
			user:'juan.j.rodriguez2@gmail.com',
			pass: 'Jr#4547611'
		}
	});

	transporter.sendMail(mailOptions,function(error,info){
		if(error){
			console.log(error);
			res.json({yo:'error'});
		}else{
			console.log('Message sent: '+ info.response);
			res.json({yo:info.response});
		}
	})
}