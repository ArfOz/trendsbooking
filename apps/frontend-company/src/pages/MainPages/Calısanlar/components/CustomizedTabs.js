import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';

export default function CustomizedTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                m: 'auto',
                width: '95%',
                mt: 3,
                borderBottom: '1px solid #55565A',
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                variant="fullWidth"
            >
                <Tab
                    value="Hepsi"
                    label="Hepsi"
                    sx={{
                        textTransform: 'capitalize',
                    }}
                />
                <Tab
                    value="Erkek"
                    label="Erkek"
                    sx={{
                        textTransform: 'capitalize',
                    }}
                />
                <Tab
                    value="Kadın"
                    label="Kadın"
                    sx={{
                        textTransform: 'capitalize',
                    }}
                />
            </Tabs>
        </Box>
    );
}
