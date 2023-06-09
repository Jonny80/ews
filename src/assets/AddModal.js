import {
    Box,
    Button, Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Modal,
    Select, Switch,
} from "@mui/material";
import {colors} from "@/config/colors";
import {useState} from "react";
import Header from "@/assets/Header";

export default function AddModal({open,onClose,onSave}){

    const [service, setService] = useState('');
    const [folder, setFolder] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChangeService = (event) => {
        setService(event.target.value);
    };
    const handleChangeFolder = (event) => {
        setFolder(event.target.value);
    };
    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked)
    }

    const handleSave = () =>{
        if (folder.length > 0 && service.length > 0){
            onSave(folder,service);
        }
        onClose();
    }


    return(
        <Modal open={open} onClose={onClose} style={styles.modal}>
            <div style={styles.container}>
                <div style={styles.mainHeader}>Adding new Files</div>
                <div>
                    <div style={styles.header}>Select Service</div>
                    <div>
                        <Box sx={{ minWidth: 120 }} style={{marginTop:'2vw'}}>
                            <FormControl fullWidth style={{width:"30vw"}}>
                                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                                <Select
                                    labelId="demo"
                                    id="Demo"
                                    value={service}
                                    label="Service"
                                    onChange={handleChangeService}
                                >
                                    <MenuItem value={'drive'}>Drive</MenuItem>
                                    <MenuItem value={'apple'}>Apple Cloud</MenuItem>
                                    <MenuItem value={'microsoft'}>OneDrive</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div>
                    <div style={styles.header}>Add Folder</div>
                    <div>
                        <Box sx={{ minWidth: 120 }} style={{marginTop:'2vw'}}>
                            <FormControl fullWidth style={{width:"30vw"}}>
                                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                                <Select
                                    labelId="demo"
                                    id="Demo"
                                    value={folder}
                                    label="Folder"
                                    onChange={handleChangeFolder}
                                >
                                    <MenuItem value={'Bilder'}>Bilder</MenuItem>
                                    <MenuItem value={"Dokumente"}>Dokumente</MenuItem>
                                    <MenuItem value={'Uni'}>Uni</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"30vw"}}>
                   <div>Subfolder</div>
                    <Switch />
                </div>
                <div style={styles.buttonContainer}>
                    <Button variant={'contained'} style={styles.button} onClick={onClose}>Back</Button>
                    <Button variant={'contained'} style={styles.button} onClick={handleSave}>Save</Button>

                </div>
            </div>
        </Modal>
    )

}

const styles = {
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    mainHeader:{
      fontSize: '2rem',
        fontWeight: 'bold'

    },
    container:{
        padding:'2vw',
        backgroundColor:colors.white,
        width:'80vw',
        height:'80vh',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent: 'space-between',
        borderRadius:'15px',
        border:'2px solid transparent',
        boxShadow:colors.shadow,
    },
    button:{
        borderRadius:'0.3rem',
        backgroundColor:colors.main,
    },
    header:{
        fontWeight:'bold',
        fontFamily:'Lato',
        fontSize:'1.5rem',
        textAlign:'center'

    },
    buttonContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'40vw'


    }
}