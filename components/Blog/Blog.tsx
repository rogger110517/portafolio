import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserEdit,
  faComments,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import type { WPPost } from '@/types/wordpress';
import {
  BlogSection,
  Container,
  SectionHeader,
  SubHeading,
  MainHeading,
  BlogGrid,
  BlogCardVertical,
  BlogImgBox,
  BlogContentBox,
  DateSpan,
  BlogHeading,
  BlogMeta,
  BlogExcerpt,
  ReadMoreLink,
  BlogRightCol,
  BlogCardHorizontal,
  BlogImgBoxHorizontal,
} from './Blog.styles';

interface BlogProps {
  posts: WPPost[];
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  const [first, second, third] = posts;

  return (
    <BlogSection>
      <Container>
        <SectionHeader>
          <SubHeading>Mi Blog</SubHeading>
          <MainHeading>Últimas Novedades</MainHeading>
        </SectionHeader>

        <BlogGrid>
          {/* First post: large vertical card */}
          {first && (
            <BlogCardVertical>
              <BlogImgBox>
                <img
                  src={first.imageUrl || '/images/port-blog1.jpg'}
                  alt={first.title.rendered}
                  loading="lazy"
                />
              </BlogImgBox>
              <BlogContentBox>
                <DateSpan>{first.formattedDate}</DateSpan>
                <BlogHeading>
                  <a href="#">
                    <span
                      dangerouslySetInnerHTML={{ __html: first.title.rendered }}
                    />
                  </a>
                </BlogHeading>
                <BlogMeta>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faUserEdit} />
                      <a href="#">By {first.authorName}</a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faComments} />
                      <a href="#">50</a>
                    </li>
                  </ul>
                </BlogMeta>
                <BlogExcerpt>
                  Explorando nuevas tecnologías, tendencias del desarrollo web
                  y experiencias del mundo real como desarrollador Full Stack.
                </BlogExcerpt>
                <ReadMoreLink href="#">
                  Leer más <FontAwesomeIcon icon={faArrowRight} />
                </ReadMoreLink>
              </BlogContentBox>
            </BlogCardVertical>
          )}

          {/* Right column: two horizontal cards */}
          <BlogRightCol>
            {second && (
              <BlogCardHorizontal>
                <BlogContentBox>
                  <DateSpan>{second.formattedDate}</DateSpan>
                  <BlogHeading>
                    <a href="#">
                      <span
                        dangerouslySetInnerHTML={{ __html: second.title.rendered }}
                      />
                    </a>
                  </BlogHeading>
                  <BlogMeta>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faUserEdit} />
                        <a href="#">By {second.authorName}</a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faComments} />
                        <a href="#">50</a>
                      </li>
                    </ul>
                  </BlogMeta>
                  <BlogExcerpt>
                    Consejos prácticos y lecciones aprendidas en proyectos
                    reales de desarrollo web.
                  </BlogExcerpt>
                  <ReadMoreLink href="#">
                    Leer más <FontAwesomeIcon icon={faArrowRight} />
                  </ReadMoreLink>
                </BlogContentBox>
                <BlogImgBoxHorizontal>
                  <img
                    src={second.imageUrl || '/images/port-blog2.jpg'}
                    alt={second.title.rendered}
                    loading="lazy"
                  />
                </BlogImgBoxHorizontal>
              </BlogCardHorizontal>
            )}

            {third && (
              <BlogCardHorizontal>
                <BlogImgBoxHorizontal>
                  <img
                    src={third.imageUrl || '/images/port-blog3.jpg'}
                    alt={third.title.rendered}
                    loading="lazy"
                  />
                </BlogImgBoxHorizontal>
                <BlogContentBox>
                  <DateSpan>{third.formattedDate}</DateSpan>
                  <BlogHeading>
                    <a href="#">
                      <span
                        dangerouslySetInnerHTML={{ __html: third.title.rendered }}
                      />
                    </a>
                  </BlogHeading>
                  <BlogMeta>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faUserEdit} />
                        <a href="#">By {third.authorName}</a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faComments} />
                        <a href="#">50</a>
                      </li>
                    </ul>
                  </BlogMeta>
                  <BlogExcerpt>
                    Herramientas, librerías y flujos de trabajo que uso en mi
                    día a día como desarrollador.
                  </BlogExcerpt>
                  <ReadMoreLink href="#">
                    Leer más <FontAwesomeIcon icon={faArrowRight} />
                  </ReadMoreLink>
                </BlogContentBox>
              </BlogCardHorizontal>
            )}
          </BlogRightCol>
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

export default Blog;
