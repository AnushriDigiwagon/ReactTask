import React, { useState } from "react";
import { TextField, Button, Grid, IconButton, Typography, Paper, ButtonBase } from "@mui/material";
import { Close } from "@mui/icons-material";
import { blue } from "material-ui-colors";

export default function UserDashboard() {

    const [variants, setVariants] = useState([{ name: "", amount: "" }]);
    const [FormData, setFormData] = useState({ productName: "", productImage: "",  });
    const handleAddVariant = () => {
        setVariants([...variants, { name: "", amount: "" }]);
    }

    const handleChange = (index, event) => {
        const newVariants = [...variants];
        newVariants[index][event.target.name] = event.target.value;
        setVariants(newVariants);
    }

    const handleRemoveVariant = (index) => {
        const newVariants = [...variants];
        newVariants.splice(index, 1);
        setVariants(newVariants);
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...FormData, productImage: file });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            productName: FormData.productName,
            variants:variants,
            productImage: FormData.productImage
        };
        const formDataJson = JSON.stringify(formData);
        localStorage.setItem('formData', formDataJson);
    }
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={11}>
                <Typography variant="h5" alignItems="center" textAlign="center">
                    User Dashboard
                </Typography>
                <Paper elevation="2" sx={{ p: 3, m: 3 }}>

                    <form onSubmit={handleSubmit}> 
                        <Typography variant="h6">
                            Product Information
                        </Typography>
                        <TextField fullWidth label="Product Name" variant="outlined" margin="normal" value={FormData.productName} onChange={(e)=> setFormData({...FormData, productName:e.target.value})}/>
                        <Typography variant="body1">
                            Variants:
                        </Typography>
                        {
                            variants.map((variant, index) => (
                                <Grid container key={index}>
                                    <Grid item xs={9}>
                                        <TextField
                                            name="name"
                                            label="Name"
                                            fullWidth
                                            variant="outlined"
                                            margin="normal"
                                            value={variant.name}
                                            onChange={(event) => handleChange(index, event)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sx={{ pl: 1 }}>
                                        <TextField
                                            name="amount"
                                            label="Amount"
                                            fullWidth
                                            variant="outlined"
                                            margin="normal"
                                            value={variant.amount}
                                            onChange={(event) => handleChange(index, event)}
                                        />
                                    </Grid>
                                    <Grid item xs={1} sx={{ mt: 2 }}>
                                        <IconButton onClick={() => handleRemoveVariant(index)} >
                                            <Close />
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            ))
                        }
                        <ButtonBase onClick={handleAddVariant}>
                            <Typography variant="body1" style={{ color: "blue" }}>
                                Add variant
                            </Typography>
                        </ButtonBase>
                        <Typography variant="body1">
                            Product Image
                        </Typography>
                        <TextField fullWidth type="file" name="productImage" margin="normal" onChange={handleImageChange} />
                        <br />
                        <Button margin="normal"
                            variant="contained"
                            type="submit"
                            sx={{ mt: 2 }}
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}