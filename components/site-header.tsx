import { siteConfig } from '@/types/site-config';
import { MainNav } from './main-nav';

export function SiteHeader() {
  return (
    <header>
      <div>
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}
