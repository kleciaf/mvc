import express from 'express';

const router = Router();

router.get("/", function (req, res){
    res.status(200).send({
        title: "Bem vindas a turma Devas do Full-Stack!",
        version: "1.0.0"
    })
})


export default router;