import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

import { Container, Center, Header, ImageInput, InputField, Separator, ActionButton } from './styles';
// import AvatarInput from './AvatarInput';

function Profile() {
  const history = useHistory();
  
  // const [file, setFile] = useState(defaultValue && defaultValue.id);
  // const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const fileInput = React.createRef();

  async function handleChange(e) {
    // const data = new FormData();

    // data.append('file', e.target.files[0]);

    // const response = await api.post('files', data);

    // const { id, url } = response.data;

    // setFile(id);
    // setPreview(url);
  }

  function navigateTo(path) {
    if (path !== window.location.pathname) {
      history.push(path);
    }
  }
  
  return (
    <Container>
      <Center>
        <Header>Perfil</Header>

        <ImageInput>
          <img src={preview || 'https://pbs.twimg.com/profile_images/1466185385961263116/r0a3DcTa_400x400.jpg'} alt="img" />
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={fileInput}
          />
        </ImageInput>
        <InputField>
          <FaUser size={20} color={"#4d4d4d"} />
          <input type="text" name="name" placeholder="Seu nome" />
        </InputField>
        <InputField>
          <FaEnvelope size={20} color={"#4d4d4d"} />
          <input type="email" name="email" placeholder="Seu email" />
        </InputField>

        <Separator />

        <InputField>
          <FaLock size={20} color={"#4d4d4d"} />
          <input type="password" name="oldPassword" placeholder="Sua senha atual" />
        </InputField>
        <InputField>
          <FaLock size={20} color={"#4d4d4d"} />
          <input type="password" name="newPassword" placeholder="Sua nova senha" />
        </InputField>
        <InputField>
          <FaLock size={20} color={"#4d4d4d"} />
          <input type="password" name="confirmPassword" placeholder="Confirme sua nova senha" />
        </InputField>

        <ActionButton type='button' onClick={() => {}}>Atualizar Perfil</ActionButton>
        <ActionButton type='button' onClick={() => {navigateTo('/')}} color={'red'}>Sair do Barbex</ActionButton>
      </Center>
    </Container>
  );
}

export default Profile;