import React from 'react';
import { ThemeContext } from '../../ThemeContext';
const Main = () => {
    const { theme } = React.useContext(ThemeContext)
    console.log(theme)
    return (
        <div className={theme}>
           <h1 style={{textAlign: 'center'}}>Lorem Ipsum</h1>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis lectus, volutpat sit amet nisl sed, fringilla auctor arcu. Suspendisse et tempus nisi, nec laoreet nulla. Integer ac nulla justo. Ut dui mauris, scelerisque a suscipit in, ultrices ut lacus. Nunc mollis libero quam, eget semper est placerat et. Ut dictum nec orci ut luctus. Cras rutrum, nibh quis mattis placerat, mauris tellus porttitor justo, ac dictum nisi ipsum non felis. Sed tincidunt tristique urna in feugiat. Curabitur vel mauris efficitur, pulvinar risus ac, tincidunt neque. Nam tellus mauris, volutpat ac tempus quis, elementum vitae nulla. Mauris eget ultrices magna. Phasellus bibendum arcu a mi accumsan, vitae posuere tellus ullamcorper.

            Etiam gravida ullamcorper ligula, vulputate auctor odio suscipit sit amet. Nulla dignissim vitae diam at euismod. Donec scelerisque lobortis ipsum at bibendum. Etiam varius tellus orci, sed maximus urna convallis id. Curabitur elementum est quis nunc imperdiet, et tempus metus porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse maximus, ipsum eget fermentum finibus, ligula massa lacinia ligula, eu malesuada lacus sapien vitae augue. Ut ac felis ipsum. Ut imperdiet nulla ut ante semper, et gravida nulla laoreet. Vivamus eget tellus accumsan, vehicula orci in, tincidunt est. Aenean blandit diam ac sapien sagittis euismod. Nam luctus eleifend orci, ut varius nibh mattis eget. Aliquam eu mollis nisl, sit amet euismod ante. Morbi odio metus, sodales et massa nec, convallis porta nibh. Nulla eu sem ut lectus condimentum hendrerit. Pellentesque vitae nulla sit amet erat placerat gravida in nec dolor.

            Curabitur sed nunc a quam mollis dictum eu quis massa. Maecenas id hendrerit urna. Integer dapibus lacus nec velit hendrerit egestas. Pellentesque tempor urna massa, et efficitur lectus cursus id. Proin vestibulum a lacus vel rhoncus. Morbi nec consequat quam, et interdum nibh. Nullam condimentum leo mollis nunc malesuada varius. Pellentesque ipsum tellus, pulvinar non elit eu, bibendum aliquam dui.

            Phasellus quis mattis dolor. Morbi scelerisque odio leo, eu aliquam augue lacinia eu. Quisque venenatis arcu enim, iaculis congue enim interdum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat viverra tortor, sit amet bibendum justo rutrum et. Phasellus orci urna, sagittis ut justo in, aliquet sodales velit. Ut eget ligula eu arcu bibendum luctus eget eu neque. Nunc scelerisque non purus non viverra. Praesent venenatis mauris at diam condimentum, tempor luctus nibh tristique. Fusce egestas commodo efficitur. Quisque eros nibh, varius eget mi ut, ultricies feugiat est. Ut lacinia, ante at imperdiet euismod, erat nunc eleifend velit, quis ullamcorper nisi ante sit amet ante.

            Nulla facilisi. Maecenas sed nulla elementum, faucibus quam fermentum, pharetra odio. Morbi tristique aliquet felis, in dapibus quam. Donec mattis bibendum dolor eu tempor. Nam porta nec lectus efficitur placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque iaculis interdum ante, ut tincidunt tellus laoreet ut.

            Generated 5 paragraphs, 475 words, 3168 bytes of Lorem Ipsum
        </div>
    )
}

export default Main;