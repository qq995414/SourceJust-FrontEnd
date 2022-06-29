
import {
    useNavigate,
    ActionFunction,
    json,
    LoaderFunction,
    useLoaderData
} from 'remix';
import authenticator from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

export const action: ActionFunction = async ({ request, context }) => {

    // const formData = await request.formData();
    // call my authenticator
    console.log('request:' + request);
    const resp = await authenticator.authenticate("user-login", request, {
        throwOnError: true,
        context,
    });
    console.log('resp:' + resp);
    return resp;
};
/**
 * 獲取Cookie且查看登入是否發生錯誤
 * @param param0 
 * @returns 
 */
export const loader: LoaderFunction = async ({ request }) => {

    await authenticator.isAuthenticated(request, {
        failureRedirect: "/admin/login"
    });

    const session = await sessionStorage.getSession(
        request.headers.get("Cookie")
    );

    const error = session.get("sessionErrorKey");
    return json<any>({ error });
};


interface Props {
    onClick(): void;
}

export default function Index() {
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    return (
        <div
            className=" flex justify-center h-screen items-center overflow-hidden">
            <div
                style={{ backgroundImage: 'url(\'/images/admin-login-bg.svg\'', }}
                className="h-full relative overflow-hidden
         bg-cover bg-no-repeat w-full">
                <div className="mt-12 ml-24">
                    <img
                        className="w-12"
                        src={'/images/logo.svg'}
                        alt="" />
                </div>
                <div className="flex  justify-center items-center mt-20 z-30">

                    <ButtonAdmin
                        Id={'網    頁    系    統'} Name={'部落格、  作品集、  Q & A'} LinkTo={'webpage'}
                    />
                    <ButtonAdmin
                        Id={'檔    案    系    統'} Name={'部落格、  作品集、  Q & A'} LinkTo={'dashboard'}
                    />

                </div>
                <div className="flex  justify-center items-center mt-20 z-30">


                    <ButtonAdmin
                        Id={'專 案 系 統'} Name={'查看商務業績、排行等'}  LinkTo={'dashboard'}
                    />
                    <ButtonAdmin
                        Id={'業    務    系    統'} Name={'查看商務業績、排行等'} LinkTo={'dashboard'}
                    />
                </div>
                <div className="flex  justify-center items-center mt-20 z-30">

                    <ButtonAdmin
                        Id={'公    司   系    統'} Name={'查看商務業績、排行等'} LinkTo={'dashboard'}
                    />
                    <ButtonAdmin
                        Id={'廠   商   系    統'} Name={'合作人員 、 客戶相關資料'} LinkTo={'dashboard'}
                    />

                </div>


                <div
                    className="bg-black w-full h-full absolute
      top-0 bg-opacity-30 z-10" />
            </div>

        </div >
    );
}

function ButtonAdmin(props: { Id: string, Name: string ,LinkTo:string}) {
    const navigate = useNavigate();
    const Id = props.Id;
    const LinkTo = '/admin/'+props.LinkTo;
    console.log(props.LinkTo);
    
    return (<button
        style={{
            color: '#B62122',
            backgroundColor: '#FFFFFFD1',

        }}

        className="rounded-lg w-3/12
     p-4 text-center m-10 z-30 pt-7 pt-7 hover-button"
     
    ><a href={LinkTo}>
        <span className='hover-button--off'>
            {props.Id}
        </span>
        <span className='hover-button--on  pt-4'>
            <div>{props.Id}
            </div>
            <div className='pt-5' style={{ color: '#5B5B5B	' }}>{props.Name}
            </div>
        </span></a>
    </button>);

}
