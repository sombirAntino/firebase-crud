import { Router, Request, Response } from 'express';
import {
    addDoc,
    getDocs,
    setDoc,
    doc,
    deleteDoc,
} from 'firebase/firestore/lite';
import User from '../config/firebase-config';

const router = Router();
router.get('/get', async (req: Request, res: Response) => {
    const resp = await getDocs(User);
    const result = resp.docs.map((i) => ({ id: i.id, ...i.data() }));
    res.send({
        message: 'User data',
        data: result,
    });
});

router.post('/create', async (req: Request, res: Response) => {
    const body = req.body;
    const data = await addDoc(User, body);
    res.send({
        message: 'User Added',
    });
});

router.patch('/update/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const docRef = doc(User, id);
    await setDoc(docRef, req.body);
    res.send({
        message: 'User data updated',
    });
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const docRef = doc(User, id);
    await deleteDoc(docRef);
    res.send({
        message: 'User data Deleted',
    });
});

export default router;
