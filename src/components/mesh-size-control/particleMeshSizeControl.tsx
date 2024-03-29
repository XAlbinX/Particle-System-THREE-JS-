import React, { ChangeEvent } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useParticleContext } from '../../contexts/particle.context';
import * as THREE from 'three';

const ParticleMeshSizeControl: React.FC = () => {
    const { particleMeshSize, setParticleMeshSize } = useParticleContext();

    const handleMeshSizeChange = (axis: 'x' | 'y' | 'z') => (event: ChangeEvent<HTMLInputElement>) => {
        // Parse the input value as a float
        const newSize = parseFloat(event.target.value);
        
        // Check if the value is a non-negative number, otherwise default to 0
        const validatedSize = isNaN(newSize) || newSize < 0 ? 0 : newSize;
      
        // Update the particleMeshSize state with the validated value
        setParticleMeshSize((prevSize) => {
          const updatedSize = new THREE.Vector3().copy(prevSize);
          updatedSize[axis] = validatedSize;
          return updatedSize;
        });
      };
      

    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            width: '100%', // Adjust width as necessary
          }}>
            <TextField
                label="Mesh Size X"
                type="number"
                value={particleMeshSize.x}
                onChange={handleMeshSizeChange('x')}
                size="small"
                variant="outlined"
                InputProps={{ style: { width: '180px' } }}
            />
            <TextField
                label="Mesh Size Y"
                type="number"
                value={particleMeshSize.y}
                onChange={handleMeshSizeChange('y')}
                size="small"
                variant="outlined"
                InputProps={{ style: { width: '180px' } }}
            />
            <TextField
                label="Mesh Size Z"
                type="number"
                value={particleMeshSize.z}
                onChange={handleMeshSizeChange('z')}
                size="small"
                variant="outlined"
                InputProps={{ style: { width: '180px' } }}
            />
        </Box> 
    );
};

export default ParticleMeshSizeControl;
