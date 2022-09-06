import type {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

export default async function handler(req : NextApiRequest, res : NextApiResponse){
    
    const {email, password}= req.body

    if(email && password){
        const payload={
            data: {
                user:'raghu@gmail'
            }
        }
        try{

            const token= await jwt.sign(payload, 'demoapp', {expiresIn: 10})
            res.json({token})
        }
        catch(e){
            return res.status(400).json({message:'error'})
        }
    }
    else{
        return res.status(500).json({message:'error'})
    }

}