import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    descricao: String
});

export const HomeModel = mongoose.model('Home', HomeSchema);

export class Home {

}