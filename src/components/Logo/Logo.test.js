import { render } from '@testing-library/react';
import Logo from './Logo';
 
describe('<Logo />', () => {
 
    it('renders the logo', () => {
        const {container} = render(<Logo/>);
        expect(container).toMatchSnapshot();
    });
});