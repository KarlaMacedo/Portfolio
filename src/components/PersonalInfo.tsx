// PersonalInfo.tsx
import SocialIcons from './SocialIcons'; // Importa el componente SocialIcons

const PersonalInfo = () => {
  return (
    <div className="col-lg-4 about-card">
      <h3 className="font-weight-light">Información personal</h3>
      <span className="line mb-5"></span>
      <ul className="mt40 info list-unstyled">
        <li><span>Email</span> : kpmacedo9@gmail.com </li>
        <li><span>Teléfono</span> : + (52) 449 233 39 85</li>
        <li><span>Dirección</span> : Monterrey, Nuevo León, México.</li>
      </ul>
      <SocialIcons />
    </div>
  );
};

export default PersonalInfo;
