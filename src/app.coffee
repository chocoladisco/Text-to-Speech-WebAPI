express = require 'express'
festival = require 'festival'
config = require './config'
del = require 'del'
randomstring = require 'just.randomstring'

app = express()
app.listen config.port

app.get '/' , (req, res) ->
	path = __dirname 
	filename = randomstring();
	festival.toSpeech req.query.q, path + filename, (err) ->
		res.sendFile path + filename, (err) ->
			del path + filename