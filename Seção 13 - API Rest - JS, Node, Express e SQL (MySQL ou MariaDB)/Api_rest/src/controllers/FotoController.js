import multer from "multer";
import multerConfig from "../config/multer.js";

import Foto from "../models/Foto.js";

const upload = multer(multerConfig).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        if (!aluno_id) {
          return res.status(400).json({
          errors: ["Aluno inválido ou não existe."],
          })
        }

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (error) {
        return res.status(400).json({
          errors: ["Aluno inválido ou não existe."],
        });
      }
    });
  }
}

export default new FotoController();
